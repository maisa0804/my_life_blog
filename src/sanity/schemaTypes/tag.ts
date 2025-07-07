// schemas/tag.ts
import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for the tag'
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      description: 'Color for tag display'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Travel', value: 'travel'},
          {title: 'Tech', value: 'tech'},
          {title: 'Lifestyle', value: 'lifestyle'},
          {title: 'General', value: 'general'}
        ]
      },
      description: 'Category to group similar tags'
    })
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      color: 'color'
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        title,
        subtitle: category ? `Category: ${category}` : undefined
      }
    }
  }
})

// schemas/post.ts の更新版（tagsフィールドのみ）
defineField({
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [{type: 'reference', to: {type: 'tag'}}],  // ← 参照に変更
  description: 'Select existing tags or create new ones'
})
