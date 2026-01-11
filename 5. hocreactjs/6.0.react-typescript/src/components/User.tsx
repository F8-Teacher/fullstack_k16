import type React from "react";
import { useState } from "react";
import type { User } from "./Todos";

type Props = {
  name: string;
  email: string;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
export default function User({ name, email, setUser }: Props) {
  const [value, setValue] = useState<null | string>(null);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeValue} />
      </form>
    </div>
  );
}
