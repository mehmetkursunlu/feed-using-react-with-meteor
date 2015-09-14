Router.route('/', () => {
  let page = (
    <Layout>
      <Home/>
    </Layout>
  );

  React.render(page, document.body);
});
