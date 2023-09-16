// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
	name: 'Projects',
	filePathPattern: `**/*.md`,
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
		},
		url: {
			type: 'string',
		},
		repository: {
			type: 'string',
		},
		thumbnailUrl: {
			type: 'string',
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: './projects',
	documentTypes: [Project],
});
