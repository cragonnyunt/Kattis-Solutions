#include <iostream>
using namespace std;
int binarySearch(int arr[], int l, int r, int x)
{
  while (l <= r)
  {
    int m = l + (r-l)/2;
    if (arr[m] == x) 
        return m;    
    if (arr[m] < x) 
        l = m + 1; 
    else
         r = m - 1; 
  }
  return -1; 
}
int main()
{
	int N, M;
	cin >> N >> M;
	while(N != 0 && M != 0)
	{
		int cds[N];
		for(int i = 0; i < N; i++)
			cin >> cds[i];
		int count = 0;
		int index = 0;
		for (int i = 0; i < M; i++)
		{
			int input_cd;
			cin >> input_cd;
			int tmpIndex = -1;
			if((tmpIndex = binarySearch(cds, index, N - 1, input_cd)) >= 0)
				count++;
			if(index < tmpIndex)
				index = tmpIndex;
		}
		cout << count << endl;
		cin >> N >> M;
	}
	return 0;
}
