import { AuthLayout } from "../_components/auth-layout";
import ArrowIcon from "../../assets/arrow-icon.png";
import Image from "next/image";
import { InputClass } from "../_styles/input";
import { LabelClass } from "../_styles/label";
import { ButtonClass } from "../_styles/button";

export default function SignInPage() {
    return (
        <AuthLayout
            title="Bem-vindo de volta"
            description="Entre com suas credenciais para continuar"
            footerText="Não tem uma conta?"
            footerLinkText="Criar conta"
            footerHref="/sign-up"
        >
            <form className="space-y-6">
                    <label className={LabelClass}>
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="seu@email.com"
                        className={InputClass}
                    />

                    <label className={LabelClass}>
                        Senha
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