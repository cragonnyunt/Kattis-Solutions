import java.util.Scanner;

public class twostones {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		System.out.println(N % 2 == 0 ? "Bob" : "Alice");
		scan.close();
	}
}
