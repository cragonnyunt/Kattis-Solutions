import java.util.Scanner;

public class sjecista {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		System.out.println(N * (N-1) * (N-2) * (N-3) / 24);
		scan.close();
	}
}
