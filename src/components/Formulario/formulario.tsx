import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { Input } from "../Input/input";
import Navbar from "../Navbar/navbar";


interface Inputs {
  data: Date;
  homens: number
  mulheres: number
  criancas: number
}

const schema = yup
  .object({
    homens: yup.number().positive('Quantidade mínima não atingida').integer().required(),
    data: yup.date().min(new Date(), 'Data inválida, o evento precisa ser marcado futuramente').required('Erro na data'),
    mulheres: yup.number().positive('Quantidade mínima não atingida').integer().required(),
    criancas: yup.number().positive('Quantidade mínima não atingida').integer().required(),
  })
  .required()

export default function Formulario() {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = (data: Inputs) => {
    console.log(errors);
    console.log(data)
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Homens: </label>
        <Input type="number" register={register} name="homens" error={errors.homens} />
        <label> Mulheres: </label>
        <Input type="number" register={register} name="mulheres" error={errors.mulheres} />
        <label> Crianças: </label>
        <Input type="number" register={register} name="criancas" error={errors.criancas} />
        <label> Data: </label>
        <Input type="date" register={register} name="data" error={errors.data} />

        <button type="submit">Enviar</button>
        <button type="button" onClick={() => console.log(errors)}>Mostrar Erros</button>
      </form>
    </div>
  )
}