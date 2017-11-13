import java.util.Scanner;

public class vauvau {
	static void getAttack(int[] attacks, int attack, int rest) {
		boolean isAttack = true;
		int count = attack;
		for (int i = 0; i < attacks.length; i++) {
			if (isAttack)
				attacks[i] += 1;
			if (--count == 0) {
				isAttack = !isAttack;
				count = isAttack ? attack : rest;
			}
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int A = scan.nextInt();
		int B = scan.nextInt();
		int C = scan.nextInt();
		int D = scan.nextInt();
		int P = scan.nextInt();
		int G = scan.nextInt();
		int M = scan.nextInt();
		int maxTime = Math.max(P, Math.max(G, M));
		int[] attacks = new int[maxTime];
		getAttack(attacks, A, B);
		getAttack(attacks, C, D);
		for (int i : new int[] { P, G, M }) {
			switch (attacks[i - 1]) {
			case 0:
				System.out.println("none");
				break;
			case 1:
				System.out.println("one");
				break;
			default:
				System.out.println("both");
				break;
			}
		}
		scan.close();
	}
}
