import ReactDOM from "react-dom";
import React from 'react';











class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }





    signFuncWAVES() {
        console.log('text box')
        var x = document.getElementById("ilosc").value;
        console.log(x)
        console.log('koniec')

        //var zmienna = prompt("Ile Szczepan chcesz kupić");


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
                }, payment: [{ assetId: "WAVES", tokens: x }]
            }
        };


        if (WavesKeeper) {


            WavesKeeper.signAndPublishTransaction(txData).then((data) => {



                // published tx result
            }).catch((error) => {
                console.error(error);//processing errors
            });
        }
        else {
            alert("Do tej wymiany potrzebne jest zainstalowanie WavesKeeper");

        }

        //alert("Do tej wymiany potrzebne jest zainstalowanie WavesKeeper");





    }




    signFuncSzczepan() {

        var y = document.getElementById("ilosc2").value;

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
                }, payment: [{ assetId: "GoJ7x4boYrFMcnffZ2kip4mgGsFy4KyZryG9jooLtGXo", tokens: y }]
            }
        };




        if (WavesKeeper) {
            WavesKeeper.signAndPublishTransaction(txData).then((data) => {
                // published tx result


                console.log(signAndPublishTransaction); //displaying the result on the console






            }).catch((error) => {
                console.error(error);//processing errors
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

    funcvalue(e) {
        var xy = document.getElementById("ilosc").value;
        var xyz = document.getElementById("wynik");


        return xy;
    }


    zmiana(e) {
        var t;


        ("" === (t = e.target.value.replace(/,/g, ".")) || Bg.test(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && n(t)
    }

    zmiana2(e) {
        let s = document.getElementById("ilosc").value;
        s = s * 100;
        s = Math.floor(s);
        s = s / 100;
        console.log(s);
        s = s * 0.97;
        console.log(s);
        s = s * 100;
        s = Math.floor(s);
        s = s / 100;
        console.log(s);
        document.getElementById("wynik").value = s;

    }


    zmiana3(e) {
        let s = document.getElementById("wynik").value * 100;
        s = s / 97;
        s = s * 100;
        s = Math.ceil(s)
        s = s / 100;
        document.getElementById("ilosc").value = s;
        let s1 = document.getElementById("wynik").value * 100;
        s1 = Math.round(s1)
        s1 = s1 / 100;
        document.getElementById("wynik").value = s1;

    }

    zmiana4(e) {
        let s = document.getElementById("ilosc2").value;
        s = s * 100;
        s = Math.floor(s);
        s = s / 100;
        console.log(s);
        s = s * 0.97;
        console.log(s);
        s = s * 100;
        s = Math.floor(s);
        s = s / 100;
        console.log(s);
        document.getElementById("wynik2").value = s;

    }


    zmiana5(e) {
        let s = document.getElementById("wynik2").value * 100;
        s = s / 97;
        s = s * 100;
        s = Math.ceil(s)
        s = s / 100;
        document.getElementById("ilosc2").value = s;
        let s1 = document.getElementById("wynik2").value * 100;
        s1 = Math.round(s1)
        s1 = s1 / 100;
        document.getElementById("wynik2").value = s1;

    }


    render() {
        return (
            <div className="container">

                <table algin="center">
                    <tr>
                        <td align="center" width="900">




                            <input name="arg1" id="ilosc" width="1200" height="600" inputmode="decimal" title="Ilość WAVES" autocomplete="off" autocorrect="off" type="number" placeholder="0.00000000" minlength="1" maxlength="79" spellcheck="false" pattern="^[0-9]*[.,]?[0-9]*$" onChange={this.zmiana2}></input>


                            <input name="otrzymasz" id="wynik" placeholder="0.00" type="number" itle="Ilość Szczepanów" onChange={this.zmiana3}></input> <p></p>
                            <br></br>


                            <input className="btn btn-primary" width="600" height="0" type="submit" value="Wymień WAVES na Szczepan" onClick={this.signFuncWAVES} />
                        </td>
                        <td align="center" width="900">




                            <input name="arg1" id="ilosc2" inputmode="decimal" title="Ilość WAVES" autocomplete="off" autocorrect="off" type="number" placeholder="0.00" minlength="1" maxlength="79" spellcheck="false" pattern="^[0-9]*[.,]?[0-9]*$" onChange={this.zmiana4}></input>


                            <input name="otrzymasz" id="wynik2" placeholder="0.00000000" type="number" onChange={this.zmiana5} ></input> <p></p>
                            <br></br>



                            <input className="btn btn-primary" type="submit" value="Wymień Szczepan na Waves " onClick={this.signFuncSzczepan} />
                        </td>
                    </tr>
                </table>
            </div >
        )
    }
}









const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App />, app);
}



