import java.util.Scanner;

public class dartscores {
	static final int[] circle = { 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 };
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int n = scan.nextInt();
			int score = 0;
			while (n-- > 0) {
				int x = scan.nextInt();
				int y = scan.nextInt();
				double pt;
				if((pt = Math.sqrt(x * x + y * y)) <= 200) {
					int p = 10;
					for(int i : circle)
						if(pt > i)
							p--;
						else
							break;
					score += p;
				}
			}
			System.out.println(score);
		}
		scan.close();
	}
}
