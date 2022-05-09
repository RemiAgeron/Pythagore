import React from 'react';
import { useForm } from 'react-hook-form';
import Triangle from './Triangle';
import { button, inputNumber, labelNumber, sideValues } from '/imports/constants/FormClass';

const Calculator = () => {

  const [values, setValues] = React.useState<sideValues>({ sideA: null, sideB: null, sideC: null });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any): void => setValues(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-20 grid divide mx-auto w-fit text-center gap-6'>
      <Triangle {...values} />
      <div className='flex gap-3'>
        <div>
          <label htmlFor="sideA" className={labelNumber}>Segment A</label>
          <input type="number" id="sideA" className={inputNumber} {...register("sideA")} />
        </div>
        <div>
          <label htmlFor="sideB" className={labelNumber}>Segment B</label>
          <input type="number" id="sideB" className={inputNumber} {...register("sideB")} />
        </div>
        <div>
          <label htmlFor="sideC" className={labelNumber}>Segment C</label>
          <input type="number" id="sideC" className={inputNumber} {...register("sideC")} />
        </div>
      </div>
      <button type="submit" className={button}>Calcul</button>
    </form>
  );
};

export default Calculator;