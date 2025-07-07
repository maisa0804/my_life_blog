// schemas/category.ts
import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of this category",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
      description: "Theme color for this category",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: 'Icon name (e.g., "map", "laptop", "heart")',
      options: {
        list: [
          { title: "🌍 Travel", value: "map" },
          { title: "💻 Tech", value: "laptop" },
          { title: "✨ Lifestyle", value: "heart" },
          { title: "📝 General", value: "document" },
          { title: "🎯 Featured", value: "star" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      description: "Optional image for category pages",
    }),
    defineField({
      name: "featured",
      title: "Featured Category",
      type: "boolean",
      description: "Show this category prominently on homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in navigation (lower numbers appear first)",
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (Rule) => Rule.max(160),
        },
      ],
      description: "SEO settings for category pages",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      color: "color",
      icon: "icon",
      order: "order",
      media: "image",
    },
    prepare(selection) {
      const { title, description, icon, order } = selection;
      const iconMap = {
        map: "🌍",
        laptop: "💻",
        heart: "✨",
        document: "📝",
        star: "🎯",
      };
      const emoji = iconMap[icon as keyof typeof iconMap] || "📁";

      return {
        title: `${emoji} ${title}`,
        subtitle: order ? `Order: ${order} • ${description}` : description,
        media: selection.media,
      };
    },
  },
});
