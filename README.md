## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  src/
    actions/
     index.js // action for requesting data from JSON
     components/
      Header.js // stackline header
      Header.less
      Main.js // root component of application
      ProductDetail.js //fetching product detail
      ProductDetail.less
      SalesTable.js //display retail sales data in table
      SalesTable.less
      SideBar.js //
      SideBar.less
      SideBarMenu.js // display sales and overview text with image
      SideBarMenu.less
    container/
     ContentContainer // HOC for getting data from redux store
    reducers/
     data.js
     index.js // root reducers

    api.js // fetch api call
    saga.js //
    store.js // redux store
    index.js // entry point for application
    webpack.config.js // for bundling application
    .bablerc // for transpiling ES6 code to ES5
    .prettierrc // for formatting

## To Run the application:

After clone, run following commands:

In the project directory, you can run:

### `npm install`

### `npm start`
```
