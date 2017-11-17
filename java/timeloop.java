import java.util.Scanner;

public class timeloop {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		for (int i = 1; i <= N; i++)
			System.out.printf("%d Abracadabra%n", i);
		scan.close();
	}
}
