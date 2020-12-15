import ReactDOM from "react-dom";
import React from 'react';











class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }





    signFuncWAVES() {
        const txData = {
            type: 16,
            data: {
                fee: {
                    "tokens": "0.009",
                    "assetId": "WAVES"
                },
                dApp: 'szczepan',
                call: {
                    function: 'Zrobprzelew',
                    args: []
                }, payment: [{ assetId: "WAVES", tokens: 1 }]
            }
        };


        if (WavesKeeper) {
            WavesKeeper.signAndPublishTransaction(txData).then((data) => {
            // published tx result
            }).catch((error) => {
                //processing errors
            });
        }
        else {
            alert("Do tej wymiany potrzebne jest zainstalowanie WavesKeeper");

        }
    }




    signFuncSzczepan() {
        const txData = {
            type: 16,
            data: {
                fee: {
                    "tokens": "0.009",
                    "assetId": "WAVES"
                },
                dApp: 'szczepan',
                call: {
                    function: 'Zrobprzelew',
                    args: []
                }, payment: [{ assetId: "GoJ7x4boYrFMcnffZ2kip4mgGsFy4KyZryG9jooLtGXo", tokens: 1 }]
            }
        };


        if (WavesKeeper) {
            WavesKeeper.signAndPublishTransaction(txData).then((data) => {
            // published tx result
            }).catch((error) => {
                //processing errors
            });
        }
        else {
            alert("Do tej wymiany potrzebne jest zainstalowanie WavesKeeper");

        }
    }


    authFunc() {
        const authData = { data: "Autoryzacja danych" };
        if (WavesKeeper) {
            WavesKeeper.auth(authData)
                .then(auth => {
                    console.log(auth); //displaying the result on the console
                    /*...processing data */
                }).catch(error => {
                    console.error(error); // displaying the result on the console
                    /*...processing errors */
                })
        } else {
            alert("Do tej wymiany potrzebne jest zainstalowanie WavesKeeper");
        }
    }



    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Wymień WAVES na Szczepan" onClick={this.signFuncWAVES} />
                <br></br>
                <br></br>

                <input className="btn btn-primary" type="submit" value="Wymień Szczepan na Waves " onClick={this.signFuncSzczepan} />

            </div>
        )
    }
}









const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App />, app);
}



