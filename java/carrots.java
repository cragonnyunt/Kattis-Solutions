import java.util.Scanner;

public class carrots {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int p = scan.nextInt();
		while (N-- > 0)
			scan.nextLine();
		System.out.println(p);
		scan.close();
	}
}
