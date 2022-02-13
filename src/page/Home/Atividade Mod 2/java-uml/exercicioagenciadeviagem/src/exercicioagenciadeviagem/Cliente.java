package exercicioagenciadeviagem;

public class Cliente {

	public static void main(String[] args) {
	 
		
		Passagem cliente1 = new Passagem();
		cliente1.relatorio("Francisco","Miami",460,10);
		Passagem cliente2 = new Passagem();
		cliente2.relatorio("Helena","Fortaleza",310,5);
		Passagem cliente3 = new Passagem();
		cliente3.relatorio("Marcelo","Nordeste",2000,10);
	}

}
