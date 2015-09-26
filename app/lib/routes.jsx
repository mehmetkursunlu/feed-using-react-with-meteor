Router.route('/', function () {
  let page = (
    <Layout>
      <Home/>
    </Layout>
  );

  React.render(page, document.body);
});
