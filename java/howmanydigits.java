import java.util.Scanner;;

public class howmanydigits {
	static final double[] bases = new double[1000001];

	static {
		bases[0] = bases[1] = 1;
		for (int i = 2; i < bases.length; i++)
			bases[i] = Math.log10(i) + bases[i - 1];
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextInt())
			System.out.println((int) Math.floor(bases[scan.nextInt()]));
		scan.close();
	}
}