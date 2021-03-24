import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button//Button';
import Modal from '../../../components/UI/Modal/Modal';
import ReproductionSteps from '../../../components/Sheeps/ReproductionSteps/ReproductionSteps';

import * as actions from '../../../store/actions/index';

/**
 * NewSheep Container 
 * Display the container to add a new sheep
 * 
 * TODO:
 */
const NewSheep = props => {
    
    const dispatch = useDispatch();
    const sheepsList = useSelector( state => state.sheepManager.sheeps );

    const sheepSavedSuccess = useSelector( state => state.newSheepReducer.sheepSavedSuccess )

    const initialState = {  // Initial form data
        born: "",
        sex: "hembra",
        earTag: "",
        tagColor: "",
        breed: "dorper",
        color: "",
        type: "reproductor",
        status: "seca",
        description: "",
        source: "nacido_finca",
        boughtPrice: "",
        soldDate: "",
        soldPrice: ""
    }

    const [sheepFormData, setSheepFormData] = useState(initialState); // Form data
    const [reproductiveCycles, setReproductiveCycles] = useState([]); //Sheep Reproductive Cycles
    
    /**
     * startNewSheep  
     * Dispatch startNewSheep action
     */
    const startNewSheep = useCallback(() => {
        setSheepFormData(initialState);
        dispatch(actions.startNewSheep());
    }, [dispatch]);

    useEffect(() => {
        startNewSheep()
    }, [startNewSheep]);


    /**
     * onSaveSheep  
     * Dispatch save new sheep action
     */
    const onSaveSheep = () => {
        const newSheep = {
            ...sheepFormData,
            reproductiveCycles: reproductiveCycles
        }
        dispatch(actions.saveNewSheep(newSheep))
    }

    /**
     * inputChangedHandler  
     * Handles input changes
     */
    const inputChangedHandler = (event, inputIdentifier) => {
        const newSheepFormData = {
            ...sheepFormData,
            [inputIdentifier]: event.target.value
        }
        setSheepFormData(newSheepFormData);
    }

    /**
     * onAddReproductiveCycle
     * Add a new Reproductive Cycle
     */
    const onAddReproductiveCycle = () => {
        const newCycle = {
            breedingDate: "",
            dueDate: "",
            weaningDate: "",
            lambs: []
        }
        let newReproductiveCycles = reproductiveCycles ? reproductiveCycles : [];
        newReproductiveCycles = newReproductiveCycles.concat( newCycle );
        setReproductiveCycles(newReproductiveCycles);
    }

    /**
     * onEditReproductiveCycle
     * Reproductive Cycle changes handler 
     */
    const onEditReproductiveCycle = (event, inputIdentifier, cycleId) => {
        const newReproductiveCycles = [ ...reproductiveCycles ];
        const newCycle = {
            ...newReproductiveCycles[cycleId],
            [inputIdentifier]: event.target.value
        };
        newReproductiveCycles[cycleId] = newCycle;
        setReproductiveCycles([...newReproductiveCycles]);
    }

    /**
     * onAddLamb
     * Add a new lamb to each Reproductive Cycle
     */
    const onAddLamb = (cycleId, lamb) => {
        const newReproductiveCycles = [ ...reproductiveCycles ];
        if (!newReproductiveCycles[cycleId].lambs) {
            newReproductiveCycles[cycleId].lambs = [];
        }
        const newCycle = {
            ...newReproductiveCycles[cycleId],
            lambs : newReproductiveCycles[cycleId].lambs.concat(lamb)
        };
        
        newReproductiveCycles[cycleId] = newCycle;
        setReproductiveCycles([...newReproductiveCycles]);
    }

    const redirectHome = () => {
        props.history.replace("/");
    }

    const divStyle = { // Temp sheep photo
        backgroundImage: 'url(https://images.unsplash.com/photo-1588672204561-5638420df69c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1060&q=80)',
    };

    // Display Sheep Reproductive Cycles
    let reproductiveCyclesList = <div className="flex w-full flex-wrap mt-5 justify-center">
                                    <p className="block tracking-wide text-gray-700 text-base mb-5 ">No Hay Ciclos Reproductivos</p>
                                    <hr className="mx-3 border-t-1 border-prymary w-full"></hr>
                                </div>
    if (reproductiveCycles) {
        reproductiveCyclesList = 
            reproductiveCycles.map((reproductiveCycle, index) => 
                <ReproductionSteps
                    key={index}
                    id={index}
                    onChange= {onEditReproductiveCycle}
                    breedingDate = {reproductiveCycle.breedingDate}
                    dueDate = {reproductiveCycle.dueDate}
                    weaningDate = {reproductiveCycle.weaningDate}
                    lambs = {reproductiveCycle.lambs}
                    onAddLamb = {onAddLamb}
                    history = {props.history}
                />
            )
    }
       
    // Display Success Modal 
    let modal = null;
    if (sheepSavedSuccess) {
        modal =  <Modal 
                    type="success" 
                    title="Éxito" 
                    description="La oveja fue agregada con éxito" 
                    btnText="Ver Todas" 
                    clicked={redirectHome} 
                    cancelClicked={startNewSheep} 
                    btnColor="green"/>
    }

    let redirect = sheepsList.length < 1 ? <Redirect to="/" /> : "";

    return (
        <div className="container mx-auto max-w-5xl px-6 py-8 relative">

            {redirect}
            
            {/* Success Modal*/}
            { modal }

            {/* Form Start */}
            <h3 className="text-gray-700 text-3xl font-medium mb-4">Agregar Oveja</h3>
            <div className="rounded bg-white pb-5">
                {/* General Data */}
                <div className="flex w-full flex-wrap mb-6 justify-center bg-primary">
                    <h3 className="block tracking-wide text-white text-xl font-bold mb-3 mt-3  ml-1 ">Datos Generales</h3>
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="earTag"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Numero de arete' }}
                            value={sheepFormData.earTag}
                            changed={event => inputChangedHandler(event, "earTag")}
                            label = "Numero de Arete"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="tagColor"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Color de arete' }}
                            value={sheepFormData.tagColor}
                            changed={event => inputChangedHandler(event, "tagColor")}
                            label = "Color de Arete"
                        /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="sex"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'hembra', displayValue: 'Hembra' },
                                    { value: 'macho', displayValue: 'Macho' }
                                ] 
                            }}
                            value={sheepFormData.sex}
                            changed={event => inputChangedHandler(event, "sex")}
                            label = "Sexo"
                            /> 
                    </div>
                    
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="born"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Fecha Nacimiento' }}
                            value={sheepFormData.born}
                            changed={event => inputChangedHandler(event, "born")}
                            label = "Fecha Nacimiento"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="breed"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'dorper', displayValue: 'Dorper' },
                                    { value: 'katahdin', displayValue: 'Katahdin' },
                                    { value: 'white_dorper', displayValue: 'White Dorper' },
                                    { value: 'pelibuey', displayValue: 'Pelibuey' },
                                    { value: 'black_belly', displayValue: 'Black Belly' },
                                    { value: 'media_raza_dorper', displayValue: 'Media Raza Dorper' }
                                ] 
                            }}
                            value={sheepFormData.breed}
                            changed={event => inputChangedHandler(event, "breed")}
                            label = "Raza"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="color"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Color' }}
                            value={sheepFormData.color}
                            changed={event => inputChangedHandler(event, "color")}
                            label = "Color"
                        />  
                    </div>
                </div>
                <div className="flex w-full flex-wrap mb-6">
                    
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="source"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'nacido_finca', displayValue: 'Nacido en finca' },
                                    { value: 'compra', displayValue: 'Compra' }
                                ] 
                            }}
                            value={sheepFormData.source}
                            changed={event => inputChangedHandler(event, "source")}
                            label = "Origen"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="mother"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Madre' }}
                            value={sheepFormData.mother}
                            changed={event => inputChangedHandler(event, "mother")}
                            label = "Madre"
                            /> 
                    </div>
                </div>
              
               {/* Productive Conditions */}
                <div className="flex w-full flex-wrap mb-6 mt-8 justify-center">
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                    <h3 className="block tracking-wide text-primary text-xl font-bold mt-2 mb-2  ml-1 ">Condiciones Productivas</h3>
                    <hr className="mx-3 border-t-1 border-prymary w-full" />

                </div>
                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="type"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'reproductor', displayValue: 'Reproductor' },
                                    { value: 'carnico', displayValue: 'Carnico' }
                                ] 
                            }}
                            value={sheepFormData.type}
                            changed={event => inputChangedHandler(event, "type")}
                            label = "Tipo"
                            />  
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="status"
                            elementType="select"
                            elementConfig= {{ 
                                options: [
                                    { value: 'fecundada', displayValue: 'Posible fecundacion' },
                                    { value: 'seca', displayValue: 'Seca' },
                                    { value: 'prenada', displayValue: 'Preñada' },
                                    { value: 'lactancia', displayValue: 'Lactancia' },
                                    { value: 'destete', displayValue: 'Destete' },
                                    { value: 'desarrollo', displayValue: 'Desarrollo' },
                                    { value: 'engorde', displayValue: 'Engorde' },
                                    { value: 'sacrificio', displayValue: 'Sacrificio' },
                                    { value: 'venta', displayValue: 'Venta' },
                                    { value: 'enferma', displayValue: 'Enferma' },
                                    { value: 'muerte', displayValue: 'Muerte' }
                                ] 
                            }}
                            value={sheepFormData.status}
                            changed={event => inputChangedHandler(event, "status")}
                            label = "Estado"
                            />  
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="description"
                            elementType="textarea"
                            elementConfig= {{ type: 'textarea', placeholder: 'Descripcion' }}
                            value={sheepFormData.description}
                            changed={event => inputChangedHandler(event, "description")}
                            label = "Descripcion"
                            /> 
                    </div>
                </div>

                {/* Economic Data */}
                <div className="flex w-full flex-wrap mb-6 mt-8 justify-center">
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                    <h3 className="block tracking-wide text-primary text-xl font-bold mt-2 mb-2 ml-1 ">Movimientos Económicos</h3>
                    <hr className="mx-3 border-t-1 border-prymary w-full" />
                </div>

                <div className="flex w-full flex-wrap mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="soldPrice"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Precio Venta' }}
                            value={sheepFormData.soldPrice}
                            changed={event => inputChangedHandler(event, "soldPrice")}
                            label = "Precio Venta"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="soldDate"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Fecha Venta' }}
                            value={sheepFormData.soldDate}
                            changed={event => inputChangedHandler(event, "soldDate")}
                            label = "Fecha Venta"
                            /> 
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center">
                        <Input
                            key="boughtPrice"
                            elementType="input"
                            elementConfig= {{ type: 'text', placeholder: 'Precio Compra' }}
                            value={sheepFormData.boughtPrice}
                            changed={event => inputChangedHandler(event, "boughtPrice")}
                            label = "Precio Compra"
                            /> 
                    </div>
                </div>

                {/* Reproductive Cycles List */}
                <div className="flex w-full flex-wrap mt-8 justify-center bg-primary">
                    <h3 className="block tracking-wide text-white text-xl font-bold mt-3 mb-3 ml-1 ">Ciclos Reproductivos</h3>
                </div>
                {reproductiveCyclesList}
                <div className="text-right px-3 -mt-6">
                    <button className="p-0 w-12 h-12 bg-green-400 rounded-full hover:bg-green-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none" onClick={onAddReproductiveCycle}>
                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                            C15.952,9,16,9.447,16,10z"></path>
                        </svg>
                    </button>
                </div>

                {/* Temp sheep photo */}
                <div className="flex flex-wrap justify-center pt-4">
                    <div className="rounded w-64 h-64 bg-center bg-cover bg-no-repeat" style={divStyle}></div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-wrap justify-center pt-4">
                    <Button btnType="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" clicked={onSaveSheep}>Enviar</Button>
                    <Button btnType="hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" clicked={redirectHome}>Cancelar</Button>
                </div>
            </div>
          
        </div> 
        )
}

export default NewSheep;