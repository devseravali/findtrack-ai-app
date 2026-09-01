import { AuthLayout } from "../_components/auth-layout";
import ArrowIcon from "../../assets/arrow-icon.png";
import Image from "next/image";
import { InputClass } from "../_styles/input";
import { LabelClass } from "../_styles/label";
import { ButtonClass } from "../_styles/button";
export default function SignUpPage() {
    return (
        <AuthLayout 
            title="Criar conta"
            description="Preencha os dados para começar"
            footerText="Já tem uma conta?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >
            <form className="space-y-6">
                <label className={LabelClass}>
                   nome
                </label>

                <input
                    type="text"
                    placeholder="Seu nome"
                    className={InputClass}
                />

                <label className={LabelClass}>
                    Senha(min. 8 caracteres)
                </label>

                <input
                    type="password"
                    placeholder="••••••••"
                    className={InputClass}
                />

                <button type="submit" className={ButtonClass}>
                    <span>Entrar</span>
                    <Image src={ArrowIcon} alt="Arrow Icon" />
                </button>
            </form>
        </AuthLayout>
    );
}
