import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

type GroupWithLinks = Prisma.GroupGetPayload<{
  include: {
    LinksOnGroups: {
      select: {
        Link: { select: { title: true; imagePath: true } };
      };
    };
  };
}>;

export default defineEventHandler(async (event) => {
  const page = 1;
  const PAGE_PER_COUNT = 10;

  const groupsData = await groups({
    where: { published: true },
    orderBy: { lastPostCreatedAt: "desc" },
    skip: (page - 1) * PAGE_PER_COUNT,
    take: PAGE_PER_COUNT,
  });

  const _groups = groupsData.map((g) => {
    return {
      domain: g.domain,
      title: g.title,
      description: g.description,
      links: g.LinksOnGroups.map((x) => x.Link),
    };
  });

  return _groups;
});

async function groups(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.GroupWhereUniqueInput;
  where?: Prisma.GroupWhereInput;
  orderBy?: Prisma.GroupOrderByWithRelationInput;
}): Promise<GroupWithLinks[]> {
  const { skip, take, cursor, where, orderBy } = params;
  return await prisma.group.findMany({
    include: {
      LinksOnGroups: {
        select: {
          Link: { select: { title: true, imagePath: true } },
        },
        orderBy: {
          Link: { lastPostCreatedAt: "desc" },
        },
      },
    },
    skip,
    take,
    cursor,
    where,
    orderBy,
  });
}
