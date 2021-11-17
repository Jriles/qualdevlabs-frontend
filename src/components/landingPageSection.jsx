import React from "react";

class LandingPageSection extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      

    render() { 
        const { width } = this.state;
        const isMobile = width <= 576;
        if (isMobile)
        {
            return <div className="px-4 text-white text-center landing-section-buffer">
                <div>
                    <h2>{this.props.header}</h2>
                    <p className="section-text">{this.props.text}</p>
                </div>
                <div className="row mt-5">
                    <img className="col" src={this.props.image}/>
                </div>
            </div>;
        }
        else
        {
            return <div className="px-5 container-fluid landing-section-buffer">
                <div className="row gx-5"> 
                    <div className="col-6 mt-4 text-white">
                        <h2 className="section-header">{this.props.header}</h2>
                        <p className="mt-4 section-text">{this.props.text}</p>
                    </div>
                    <img className="col" src={this.props.image}/>
                </div>
            </div>
        }
        
    }
}
 
export default LandingPageSection;