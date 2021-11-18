import Article from "../components/article";
import image from '../assets/react_boot.png';
import React from "react";

class CustomizeBootstrapReact extends React.Component {
    render() { 
        return <div>
            <Article image={image} title="Customize Bootstrap in React" content={
                <div className="text-white align-center d-flex justify-content-center mb-5">
                    <p className="mt-5 fs-5 w-50">
                        First, open a console at the root of your react project.
                        <br/>
                        Next, we are going to install a couple packages.
                        <br/>
                        <br/>
                        <code>npm i bootstrap react-bootstrap --save</code>
                        <br/>
                        <br/>
                        From here we'll create a directory and a couple files. From the <code>/src</code> directory
                        in your react project run the following commands: 
                        <br/>
                        <br/>
                        <code> mkdir scss</code>
                        <br/>
                        <code>cd scss</code>
                        <br/>
                        <code> touch custom.scss</code>
                        <br/>
                        <code>touch app.scss</code>
                        <br/>
                        <br/>
                        Open custom.scss in your favorite editor and add any customizations you want at the top,
                        for example:
                        <br/>
                        <br/>
                        <code>
                        $theme-colors: (
                            <br/>
                            "primary": #ff007b,
                            <br/>
                            "success":#03c102
                            <br/>
                        );
                        </code>
                        <br/>
                        <br/>
                        Note: order matters here, you can see the order for this particular mapping, and others 
                        <a href="https://getbootstrap.com/docs/5.1/customize/sass/#modify-map"> here.</a>
                        <br/>
                        <br/>
                        We'll wrap up custom.scss with the following import, <b>after our customizations</b>
                        , to apply them to bootstrap:
                        <br/>
                        <br/>
                        <code>@import "~bootstrap/scss/bootstrap";</code>
                        <br/>
                        <br/>
                        Switch over to app.scss and add the following:
                        <br/>
                        <br/>
                        <code>
                        @import "~bootstrap/scss/bootstrap";
                        <br/>
                        @import "custom";
                        </code>
                        <br/>
                        <br/>
                        Once you've added your imports, switch over to index.js or app.jsx and add the following import:
                        <br/>
                        <br/>
                        <code>
                        import './scss/app.scss';
                        </code>
                        <br/>
                        <br/>
                        Congragulations! You've successfully customized Bootstrap in React. Happy coding!
                    </p>
                </div>
            }/>
        </div>;
    }
}
 
export default CustomizeBootstrapReact;