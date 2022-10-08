import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import {Component} from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error){
        this.setState({hasError:true});
    }
    render(){
        if(this.state.hasError){
            return <p>Something Went Wrong !!</p>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;