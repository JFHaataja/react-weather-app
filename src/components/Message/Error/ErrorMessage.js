
export default function ErrorMessage() {
    return (
            <div>
                <div>
                    <div className="text-center">
                        <h1 className="container-content-h1 error-h1">
                            Sorry, something went wrong.
                        </h1>
                        <iframe
                            aria-hidden="true"
                            title="404"
                            className="vh-50"
                            src="https://embed.lottiefiles.com/animation/98119"
                        ></iframe>
                        <h2 className="error-h2">
                            WEATHER WISE has encountered an error. Please try refreshing the page.
                        </h2>
                    </div>
                </div>
            </div>  
    );
}
