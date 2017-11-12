import java.util.Scanner;

public class mjehuric {
	static int[] p = new int[5];
	static int index;

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		for (int i = 0; i < p.length; i++)
			p[i] = scan.nextInt();
		while (!(p[0] == 1 && p[1] == 2 && p[2] == 3 && p[3] == 4 && p[4] == 5)) {
			if (index == 4)
				index = 0;
			int nextIndex = index + 1;
			if (p[index] > p[nextIndex]) {
				int tmp = p[index];
				p[index] = p[nextIndex];
				p[nextIndex] = tmp;
				for (int i : p)
					System.out.print(i + " ");
				System.out.println();
			}
			index = nextIndex;
		}
		scan.close();
	}
}
