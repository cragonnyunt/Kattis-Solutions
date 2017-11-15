import java.util.Scanner;

public class dicegame {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		double g_sum = new Player(scan.nextInt(), scan.nextInt(), scan.nextInt(), scan.nextInt()).getSum();
		double e_sum = new Player(scan.nextInt(), scan.nextInt(), scan.nextInt(), scan.nextInt()).getSum();
		if (g_sum > e_sum)
			System.out.println("Gunnar");
		else if (g_sum < e_sum)
			System.out.println("Emma");
		else
			System.out.println("Tie");
		scan.close();
	}
}

class Player {
	Dice d1, d2;

	public Player(int a1, int b1, int a2, int b2) {
		d1 = new Dice(a1, b1);
		d2 = new Dice(a2, b2);
	}

	public double getSum() {
		return d1.getSum() + d2.getSum();
	}
}

class Dice {
	int a, b;

	public Dice(int a, int b) {
		this.a = a;
		this.b = b;
	}

	public double getSum() {
		return (b + a) / 2.0;
	}
}
