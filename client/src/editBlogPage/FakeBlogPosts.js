module.exports.getFakeTitle = () => {
  const fakeTitles = [
    'Natus consequatur voluptas beatae quisquam.',
    'Qui beatae quod et modi.',
    'Assumenda veniam ut molestias.',
    'Laudantium aut sint et in repudiandae est cupiditate.',
    'Totam eveniet minus corrupti amet.',
    'Et voluptates ut sed tenetur consectetur voluptatem.',
    'Est enim non.',
  ];
  return fakeTitles[Math.floor(Math.random() * fakeTitles.length)];
};

module.exports.getFakePost = () => (
  'Odio et explicabo incidunt eum. Vel saepe mollitia incidunt aut illo corrupti est deleniti.'
);

const fakeParagraphs = [
  'Cupiditate commodi itaque perspiciatis animi reprehenderit distinctio. Hic assumenda atque. Maiores sint est. Saepe asperiores non. Repudiandae beatae cum rerum repellendus recusandae aut atque. Ut dolores sit est rerum quia et est.',
  'Quidem atque voluptatem et et. Quia asperiores deleniti blanditiis alias quibusdam hic temporibus quae sunt. Natus tempore dolores qui nemo vel porro.',
  'Sunt corrupti et consequatur. Sint modi reiciendis tempora vel voluptate. Voluptatum illum accusantium iure ea ut. Hic qui molestiae quia unde iure magnam autem.',
];

module.exports.postArray = () => {
  const posts = [];
  const fakeTitles = [
    'Natus consequatur voluptas beatae quisquam.',
    'Qui beatae quod et modi.',
    'Assumenda veniam ut molestias.',
    'Laudantium aut sint et in repudiandae est cupiditate.',
    'Totam eveniet minus corrupti amet.',
    'Et voluptates ut sed tenetur consectetur voluptatem.',
    'Est enim non.',
    'Laudantium aut sint et in repudiandae est cupiditate.',
    'Totam eveniet minus corrupti amet.',
    'Et voluptates ut sed tenetur consectetur voluptatem.',
    'Est enim non.',
  ];

  for (let i = 0; i < 5; i += 1) {
    posts.push(
      {
        title: fakeTitles[i],
        text: fakeParagraphs[i],
      },
    );
  }
  return posts;
};
