import React, { forwardRef } from "react";

interface inputprops {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mensagem: string;
}

const VerificarEmail = forwardRef<HTMLInputElement, inputprops>(
  ({ onChange, mensagem }, ref) => {
    return (
      <div className="hidden" ref={ref}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Codigo de verificaçao do email"
          className="border border-gray-400 rounded px-1 py-2 w-full"
        />
        <p className="text-gray-400">{mensagem}</p>
      </div>
    );
  }
);

export default VerificarEmail;
