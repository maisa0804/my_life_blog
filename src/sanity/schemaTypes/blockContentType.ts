import { defineArrayMember, defineType } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            title: "Internal link",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Reference",
                name: "reference",
                type: "reference",
                to: [{ type: "post" }],
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      name: "imageGallery",
      title: "Image Gallery",
      type: "object",
      fields: [
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "caption",
                  type: "string",
                  title: "Caption",
                },
              ],
            },
          ],
          validation: (Rule) => Rule.min(1).max(10),
        },
        {
          name: "layout",
          title: "Layout",
          type: "string",
          options: {
            list: [
              { title: "Horizontal Scroll", value: "horizontal" },
              { title: "Grid", value: "grid" },
              { title: "Single Large", value: "single" },
            ],
          },
          initialValue: "horizontal",
        },
      ],
      preview: {
        select: {
          images: "images",
          layout: "layout",
        },
        prepare(selection) {
          const { images, layout } = selection;
          const count = images?.length || 0;
          return {
            title: `Image Gallery (${count} image${count !== 1 ? "s" : ""})`,
            subtitle: `Layout: ${layout}`,
            media: images?.[0],
          };
        },
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineArrayMember({
      type: "code",
      options: {
        language: "javascript",
        languageAlternatives: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "React JSX", value: "jsx" },
          { title: "Python", value: "python" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
        ],
        withFilename: true,
      },
    }),
    defineArrayMember({
      name: "callout",
      title: "Callout",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Warning", value: "warning" },
              { title: "Error", value: "error" },
              { title: "Success", value: "success" },
            ],
          },
        },
        {
          name: "text",
          title: "Text",
          type: "blockContent",
        },
      ],
    }),
  ],
});
