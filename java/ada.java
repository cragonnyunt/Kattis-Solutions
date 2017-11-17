import java.util.Scanner;

public class ada {
	static int next;

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int[] vList = new int[n];
		for (int i = 0; i < n; i++)
			vList[i] = scan.nextInt();
		int degree = getDegree(vList);
		System.out.printf("%d %d", degree, next + vList[n - 1]);
		scan.close();
	}

	static boolean getDistinctCountIsOne(int[] vList) {
		int preV = vList[0];
		for (int i = 1; i < vList.length; i++) {
			if (preV != vList[i])
				return false;
		}
		return true;
	}

	static int getDegree(int[] vList) {
		int[] newvList = new int[vList.length - 1];
		for (int i = 0; i < newvList.length; i++)
			newvList[i] = vList[i + 1] - vList[i];
		if (newvList.length == 1 || getDistinctCountIsOne(newvList)) {
			next = newvList[0];
			return 1;
		} else {
			int _d = 1 + getDegree(newvList);
			next += newvList[newvList.length - 1];
			return _d;
		}
	}
}
