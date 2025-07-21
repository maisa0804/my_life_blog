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
      description: 'Icon name for this category',
      options: {
        list: [
          { title: "🌍 Travel & Digital Nomad", value: "globe" },
          { title: "💻 Remote Work", value: "laptop" },
          { title: "🧘 Wellbeing", value: "heart" },
          { title: "⚡ Tech & Frontend", value: "code" },
          { title: "🇸🇪 Sweden Journey", value: "flag" },
          { title: "📚 Learning & Growth", value: "book" },
          { title: "🏠 Work-Life Balance", value: "home" },
          { title: "✨ Featured", value: "star" },
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
      description: "Optional hero image for category pages",
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
      name: "postCount",
      title: "Target Posts per Month",
      type: "number",
      description: "Content planning: How many posts to aim for in this category monthly",
      validation: (Rule) => Rule.integer().positive().max(30),
    }),
    defineField({
      name: "tags",
      title: "Related Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Common tags associated with this category",
      options: {
        layout: "tags",
      },
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
        {
          name: "keywords",
          title: "Focus Keywords",
          type: "array",
          of: [{ type: "string" }],
          description: "SEO keywords for this category",
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
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      color: "color",
      icon: "icon",
      order: "order",
      featured: "featured",
      media: "image",
    },
    prepare(selection) {
      const { title, description, icon, order, featured } = selection;
      const iconMap = {
        globe: "🌍",
        laptop: "💻",
        heart: "🧘",
        code: "⚡",
        flag: "🇸🇪",
        book: "📚",
        home: "🏠",
        star: "✨",
      };
      const emoji = iconMap[icon as keyof typeof iconMap] || "📁";
      const featuredBadge = featured ? "⭐ " : "";
      
      return {
        title: `${featuredBadge}${emoji} ${title}`,
        subtitle: order ? `Order: ${order} • ${description}` : description,
        media: selection.media,
      };
    },
  },
});