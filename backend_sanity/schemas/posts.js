export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
};
