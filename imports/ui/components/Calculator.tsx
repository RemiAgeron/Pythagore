import React from 'react';
import { useForm } from 'react-hook-form';
import Triangle from './Triangle';
import WarningMessage from './WarningMessage';
import { button, inputNumber, labelNumber, sideValues } from '/imports/constants/FormClass';

const Calculator = (): React.ReactElement => {

  const [values, setValues] = React.useState<sideValues>({ sideA: null, sideB: null, sideC: null });

  const { register, watch, formState: { errors }, handleSubmit, clearErrors } = useForm();

  const checkInputs = (field: string): boolean => {
    const watchAsArray = Object.entries(watch());
    const filteredNotNull = watchAsArray.filter(([_, value]) => value != '' && value != '0');
    const fieldIsNull = filteredNotNull.map(([key, _]) => key).includes(field);
    return fieldIsNull ? fieldIsNull : filteredNotNull.length >= 2;
  }

  const Pythagore = (side1: number, side2: number, isSide2Hypotenuse?: true) => {
    const sqrt =  Math.sqrt( isSide2Hypotenuse ? (side2 ** 2) - (side1 ** 2) : (side1 ** 2) + (side2 ** 2) );
    const round = Math.round(sqrt * 100) / 100;
    return String(round);
  }

  const onSubmit = (data: any): void => {
    const dataAsArray = Object.entries(watch());
    const filteredNull = dataAsArray.filter(([_, value]) => value == '' || value == '0');
    const getNull = filteredNull.map(([key, _]) => key);
    if (getNull.length == 1) {
      switch (getNull[0]) {
        case 'sideA':
          delete data['sideA'];
          setValues({sideA: Pythagore(parseFloat(data['sideB']), parseFloat(data['sideC']), true), ...data})
          break;
        case 'sideB':
          delete data['sideB'];
          setValues({sideB: Pythagore(parseFloat(data['sideA']), parseFloat(data['sideC']), true), ...data})
          break;
        case 'sideC':
          delete data['sideC'];
          setValues({sideC: Pythagore(parseFloat(data['sideA']), parseFloat(data['sideB'])), ...data})
          break;
        // TODO DEFAULT ERROR CALLBACK
      }
    }
    // TODO CASE 3 INPUTS
    else {
      setValues(data);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-20 grid divide mx-auto w-fit text-center gap-6'>
      <Triangle {...values} />
      <div className='flex gap-3'>
        <div>
          <label htmlFor="sideA" className={labelNumber}>Segment A</label>
          <input type="number" id="sideA" min={1} className={inputNumber} {...register("sideA", { validate: () => checkInputs('sideA') })} />
        </div>
        <div>
          <label htmlFor="sideB" className={labelNumber}>Segment B</label>
          <input type="number" id="sideB" min={1} className={inputNumber} {...register("sideB", { validate: () => checkInputs('sideB') })} />
        </div>
        <div>
          <label htmlFor="sideC" className={labelNumber}>Segment C</label>
          <input type="number" id="sideC" min={1} className={inputNumber} {...register("sideC", { validate: () => checkInputs('sideC') })} />
        </div>
      </div>
      {(errors.sideA || errors.sideB || errors.sideC) && <WarningMessage title='Attention' message='Renseignez au moins 2 côté du triangle' clear={() => clearErrors()} />}
      {/* TODO ERROR MESSAGE */}
      {/* TODO SUCCESS MESSAGE */}
      <button type="submit" className={button}>Calcul</button>
    </form>
  );
};

export default Calculator;