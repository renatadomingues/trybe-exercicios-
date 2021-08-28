const pecaChess = "REI";

switch (pecaChess.toLocaleLowerCase()) {
    case "rainha":
        console.log("Rainha->Diagonal, horizontal ou vertical");
        break;
        case "bispo":
            console.log ("Bispo->Diagonal");
            break;
            case "torre":
                console.log ("Torre->Horizontal e vertical");
                break;
                case "rei":
                    console.log ("Rei-> uma casa pra qualquer direção");
                    break;
                    case "peão":
                        console.log("Peão-> se for 1º movimento, até duas casas para frente, senão, uma casa para frente");
                        case "cavalo":
                            console.log("Cavalo-> movimento em L em qualquer direção, podendo pular sobre as peças");
                            break;
                            default:
                                console.log("Peça inválida");
                                break;
};