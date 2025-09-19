
<!-- 
         <!-- <script
         crossorigin 
         src="https://unpkg.com/react@18/umd/react.development.js"
         ></script>
<script
 crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>
    < <script src="first.js"> 
    
    </script>  ********not prefered way to do this********* --> -->

**--juse type module in script src for js file--**

react convert the in index in form of objects

install react parcel full process

1.  npm init
2. npm install -D parcel
3. npx parcel index.html
4. npm install react                   # import React from "react";
5. npm install react-dom          #  import ReactDOM from 'react-dom/client';
 

*******npm auto create main file so remove it form pacakge.json ***********

 # Parcel
    -Dev Build
    -Local Server
    -HMR = Hot module Replacement
    -File Watching Algorithm   - written in c++
    -Image optimization
    -Minification files
    -Bundling files
    -Compressing
    -fast
    -Code splitiing
    -Differential bundling   -support older browsers (make more compatable)
    -Hashing
    -Parcel remover unused code for better 
    

    the code in html is replace by the code in .js file 
    html and jxs is different 
    but jsx had similiar syntax like html xml 

    javascript engine and broweser only understand es6 and versions

    parcel - babel-  convert the code in js  we use in the format they understand

    in jsx for attriburtes it use the camel case like (tabIndex)
    React has two components 
         . class based components  (old method )
         . Funtional components   (new method)

    component compotion
      ek component ke ander ek or component


   two types of exports

     default export/import
      . export default component;
      . import component from "path"
    
    Named export/import
      . export const component;
      . import {compnent} from "path";


      video 6

      monolith:
        all the services or components like sms api ui authication in one area

      microservices
        all the components are in small apps and combine or connect acc to use for exp backend connect sms , api etc

      Fetch data direct is thorugh api
      api if two types

