import java.util.Scanner;;

public class howmanydigits {
	static double[] bases = new double[1000001];

	static {
		bases[0] = bases[1] = 1;
		for (int i = 2; i < bases.length; i++)
			bases[i] = Math.log10(i) + bases[i - 1];
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextInt()) {
			int num = scan.nextInt();
			System.out.println((int) Math.floor(bases[num]));
		}
		scan.close();
	}
}
