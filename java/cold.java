import java.util.Scanner;

public class cold {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt(), count = 0;
		while (n-- > 0)
			if (scan.nextInt() < 0)
				count++;
		System.out.println(count);
		scan.close();
	}
}
