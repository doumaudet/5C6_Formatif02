import React from 'react';
import {MontantAvecTaxes} from '../util/MontantAvecTaxes.js';

class TaxeQC extends React.Component {

    constructor(props) {
        super(props);

        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    state = {
        montantAvecTaxe: new MontantAvecTaxes(2022, 50)
    }

    handleYearChange = (e) => {
        const mnt = new MontantAvecTaxes(e.target.value, this.state.montantAvecTaxe.getMontantSansTaxe());

        this.setState({
            montantAvecTaxe : mnt
        })
    }

    handleAmountChange(e) {
        const mnt = new MontantAvecTaxes(this.state.montantAvecTaxe.getYear(), e.target.value);
        this.setState({
            montantAvecTaxe : mnt
        })
    }

    outputDollars(montant){
        return Math.round(montant*100)/100 + " $"
    }

    render() {
        const years = ["2022","2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];
        return (
            <div className="App"> 
                <fieldset>
                    
                    <legend>Choisissez l'année du calcul:</legend>
                    <select onChange={this.handleYearChange}>
                        {
                            years.map((year, index) => {
                                return <option key={index}>{year}</option>
                            })
                        }
                    </select>
                    <form>
                    <p>
                        <legend>Entrez le montant avant taxe :</legend>
                        <input onChange={this.handleAmountChange} value={this.state.montantAvecTaxe.getMontantSansTaxe()}/>
                    </p>
                    
                    <legend>TPS :</legend>
                    <input type="text" name="tps" value={this.outputDollars(this.state.montantAvecTaxe.getTPS())} readOnly />
                    <legend>TVQ :</legend>
                    <input type="text" name="tvq" value={this.outputDollars(this.state.montantAvecTaxe.getTVQ())} readOnly/>
                    <legend>Montant Total :</legend>
                    <input type="text" name="montantAvecTaxe" value={this.outputDollars(this.state.montantAvecTaxe.getMontantAvecTaxe())} readOnly/>
                    </form>
                </fieldset>
            </div>
        );
    }
}

export default TaxeQC;