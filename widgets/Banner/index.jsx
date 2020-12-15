import logoall from "../../public/images/logoall.svg";
import ipadebook from "../../public/images/ipadebook.svg";

export default function Banner() {
  function handleComprar(){
      alert('EU COMPREI')
  }  

  return (
    <div
      className="banner"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f7d1ba",
      }}
    >
      <div
        className="fotobanner"
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={ipadebook}
          width="600"
          height="800"
          alt=""
          style={{
            marginTop: "-2rem",
          }}
        />
      </div>
      <div
        className="textobanner"
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
          marginTop: "-4rem",
        }}
      >
        <div
          className="presentation"
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1rem",
          }}
        >
          <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
          >
            <img
              src={logoall}
              width="100"
              height="100"
              alt=""
              style={{
                backgroundColor: "#ffe8db",
                borderRadius: "100%",
              }}
            />
            <h1
              style={{
                fontFamily: "Comfortaa, cursive",
                marginTop: "0.5rem",
                color: "#020b28",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              All Marketing Digital
            </h1>
            <h4
              style={{
                marginTop: "-0.5rem",
                color: "#557570",
                fontFamily: "Comfortaa",
              }}
            >
              Apresenta:
            </h4>
          </div>

          <p
            style={{
              fontSize: "2rem",
              fontFamily: "Poppins",
              textAlign: 'justify'
            }}
          >
            45 práticas para se posicionar, criar conteúdo na internet de uma
            vez por todas e ainda ganhar dinheiro com isso.
          </p>
          <button
            style={{
                width: '260px',
                backgroundColor: '#1b3b35',
                padding: '1rem',
                color: 'white',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '7px'
            }}
            onClick={handleComprar}
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}
