import React from 'react';

const Form = props => (
    <div className="Form">
            <h1>Find out the weather for any city...</h1>
            <form onSubmit={props.getWeather}>
                <div className="row">
                    <div className="col">
                        <input className="form-control form-control-lg" type="text" name="city" placeholder="City..."/>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-lg" type="text" name="country" placeholder="Country..."/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Get Weather</button>
                    </div>
                </div>
            </form>
    </div>
);

export default Form;