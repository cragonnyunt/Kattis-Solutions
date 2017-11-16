import java.util.Scanner;

public class oddities {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while(n --> 0) {
			int x = scan.nextInt();
			if(Math.abs(x) % 2 == 0)
				System.out.printf("%d is even%n", x);
			else
				System.out.printf("%d is odd%n", x);
		}
		scan.close();
	}
}
