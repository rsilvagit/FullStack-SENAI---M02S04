class Conta {
    #saldo;
    #senha;
    #extrato;

    constructor(saldo, senha) {
        this.#saldo = saldo;
        this.#senha = senha;
        this.#extrato = [];
    }
    
    deposito(valor, senha) {
        if (senha === this.#senha) {
            this.#saldo += valor;
            const extrato = `Depósito R$ ${valor} || Saldo atualizado R$ ${this.#saldo}`;
            this.#extrato.push(extrato);
            return `Seu novo saldo é de R$ ${this.#saldo}`;
        } else {
            return "Senha incorreta";
        }
    }

    saque(valor, senha) {
        if (senha === this.#senha) {
            if (valor <= this.#saldo) {
                this.#saldo -= valor;
                const extrato = `Saque -R$ ${valor} || Saldo atualizado R$ ${this.#saldo}`;
                this.#extrato.push(extrato);
                return `Seu novo saldo é de R$ ${this.#saldo}`;
            } else {
                return `Saldo insuficiente. Seu limite para sacar neste momento é de R$ ${this.#saldo}`;
            }
        } else {
            return "Senha incorreta";
        }
    }

    extrato(senha, usuario) {
        if (senha === this.#senha) {
            let titular = `Titular da Conta: ${usuario}\n`;
            let historico = "Extrato:\n";
            for (const operacao of this.#extrato) {
                historico += `${operacao}\n`;
            }
            return `${titular}${historico}`;
        } else {
            return "Senha incorreta";
        }
    }
}
const Conta1 = new Conta(500,4567);
Conta1.deposito(700,4567);
Conta1.deposito(900,4567);
Conta1.saque(350,4567);
Conta1.saque(890,4567);
Conta1.deposito(1500,4567);
Conta1.extrato(4567,"Manoel");
