package exercicioagenciadeviagem;

public class Passagem {
	public String cliente;
	public String destino;
	public float valor;
	public int taxa;
	
	
	public void relatorio (String nome,String destino,float valor,int taxa) {
		this.cliente = nome;
		System.out.println("Nome:"+ this.cliente);
		this.destino = destino;
		System.out.println("Destino:"+ this.destino);
		this.valor = valor;
		System.out.println("Valor:"+ this.valor);
		this.taxa = taxa;
		System.out.println("Taxa:"+ this.taxa);
		System.out.println();
	}
}
