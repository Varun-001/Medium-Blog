import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = ()=>{
    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Emailid and password component */}
                <div>
                    <Auth type="signup"/>
                </div>

                {/* Quote Div */}
                <div className="hidden lg:block">
                    <Quote/>

                </div>

            </div>
        </>
    )
}