import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
        {
          name: "github",
          title: "GitHub",
          type: "url",
        },
        {
          name: "website",
          title: "Website",
          type: "url",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
