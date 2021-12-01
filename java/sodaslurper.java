import java.util.Scanner;

public class sodasurpler {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int e = scan.nextInt();
		int f = scan.nextInt();
		int c = scan.nextInt();
		int bottles = e + f;
		int remainings = bottles - c;
		int soda = 0;
		if (remainings >= 0)
			soda = 1 + (remainings / (c - 1));
		System.out.print(soda);
		scan.close();
	}
}
