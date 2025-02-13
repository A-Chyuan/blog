#include <iostream>

using namespace std;

bool program(string);
bool stmts(string);
bool stmt(string);
bool exp(string);
bool semicolon(string);
bool primary(string);
bool primary_tail(string);

bool STRLIT(string);
bool is_id(string);

string ans_id1, ans_id2, ans_strlit, ans_lbr, ans_rbr, ans_dot, ans_semicolon;


string temp;


bool program(string ins)
{
    if(stmts(ins))
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool stmts(string ins)
{
    if(stmt(ins))
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool stmt(string ins)
{
    string semi;
    semi = ins[ins.length()-1];



    ins = "";
    for(int i = 0; i < temp.length() - 1; i++)
    {
        ins += temp[i];
    }
    temp = ins;

    exp(ins);

    if(exp(ins))
    {
        if(semicolon(semi))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

bool exp(string ins)
{
    if(primary(ins))
    {
        return true;
    }
    else if(STRLIT(ins))
    {
        return true;
    }
    else
    {
        return false;
    }
}


bool primary(string ins)
{
    int space = 0;

    string id;


    for(int i = 0; i < ins.length(); i++)
    {
        if((ins[0] >= 'a' && ins[0] <= 'z') || (ins[0] >= 'A' && ins[0] <= 'Z') || ins[0] == '_')
        {
            for(int i = 0; i < ins.length(); i++)
            {
                if((ins[i] >= 'a' && ins[i] <= 'z') || (ins[i] >= 'A' && ins[i] <= 'Z') || (ins[i] >= '0' && ins[i] <= '9') || ins[i] == '_')
                {
                    id += ins[i];
                }
                else if(ins[i] == ' ' || ins[i] == '\t' || ins[i] == '.' || ins[i] == '(' || ins[i] == ')')
                {
                    space = i;
                    break;
                }
                else
                {
                    return false;
                }
            }
        }
        break;
    }
    if(ans_id1.empty())
    {
        ans_id1 = id;
    }

    ins = "";
    for(int i = space; i < temp.length(); i++)
    {
        if(temp[i] != ' ' || temp[i] != '\t' || temp[i] != '.')
        {
            ins += temp[i];
        }
    }
    temp = ins;

    if(is_id(id))
    {
        if(primary_tail(ins))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

bool primary_tail(string ins)
{
    if(ins[0] == '.')
    {
        ans_dot = '.';


        ins = "";
        for(int i = 1; i < temp.length(); i++)
        {
            if(temp[i] != ' ' && temp[i] != '\t')
            {
                ins += temp[i];
            }
        }
        temp = ins;




        int space = 0;
        string id;

        if((ins[0] >= 'a' && ins[0] <= 'z') || (ins[0] >= 'A' && ins[0] <= 'Z') || ins[0] == '_')
        {
            for(int i = 0; i < ins.length(); i++)
            {
                if((ins[i] >= 'a' && ins[i] <= 'z') || (ins[i] >= 'A' && ins[i] <= 'Z') || (ins[i] >= '0' && ins[i] <= '9') || ins[i] == '_')
                {
                    id += ins[i];
                }
                else
                {
                    space = i;
                    break;
                }
            }
        }


        if(ans_id2.empty())
        {
            ans_id2 = id;
        }



        ins = "";
        for(int i = space; i < temp.length(); i++)
        {
            if(temp[i] != ' ' && temp[i] != '\t')
            {
                ins += temp[i];
            }
        }
        temp = ins;

        cout<<temp<<endl;


        if(is_id(id))
        {
            if(primary_tail(ins))
            {
                return true;
            }
            else
            {
                return true;
            }
        }
        else
        {
            return false;
        }

    }
    else if(ins[0] == '(')
    {
        ans_lbr = '(';
        for(int i = 1; i < temp.length(); i++)
        {
            if(temp[i] == ')')
            {
                ans_rbr = ')';
                for(int j = 1; j < i; j++)
                {
                    if(temp[j] != ' ' && temp[j] != '\t')
                    {
                        ins += temp[j];
                    }
                }
                if(exp(ins))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        return false;
    }
    else
    {
        return true;
    }
}

bool semicolon(string ins)
{

    if(ins == ";")
    {
        ans_semicolon = ';';
        return true;
    }
    else
    {
        return  false;
    }
}


bool STRLIT(string ins)
{
    bool last_qoute = false;
    for(int i = 0; i < ins.length(); i++)
    {
        if(ins[i] == '\"')
        {
            for(int j = i + 1; j < ins.length(); j++)
            {
                if(ins[j] == '\"')
                {
                    last_qoute = true;
                    for(int k = i + 1; k < j; k++)
                    {
                        ans_strlit += ins[k];
                    }
                    return true;
                }

            }
            if(!last_qoute)
            {
                return false;
            }

        }
        else
        {
            return false;
        }
    }
}

bool is_id(string ins)
{
    if((ins[0] >= 'a' && ins[0] <= 'z') || (ins[0] >= 'A' && ins[0] <= 'Z') || ins[0] == '_')
    {
        for(int i = 0; i < ins.length(); i++)
        {
            if((ins[i] >= 'a' && ins[i] <= 'z') || (ins[i] >= 'A' && ins[i] <= 'Z') || (ins[i] >= '0' && ins[i] <= '9') || ins[i] == '_')
            {
                continue;
            }
            else
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }

}

int main()
{
    string ins;
    getline(cin, ins);
    for(int i = 0; i < ins.length(); i++)
    {
        if(ins[i] != ' ' && ins[i] != '\t')
        {
            for(int j = i; j < ins.length(); j++)
            {
                temp += ins[j];
            }
            break;
        }
    }
    ins = temp;

    if(program(ins))
    {
        if(!ans_id1.empty())
        {
            cout << "ID " << ans_id1 << endl;
        }
        if(!ans_dot.empty())
        {
            cout << "DOT " << ans_dot <<endl;
        }
        if(!ans_strlit.empty())
        {
            cout << "STRLIT " << ans_strlit <<endl;
        }
        if(!ans_lbr.empty())
        {
            cout << "LBR " << ans_lbr <<endl;
        }
        if(!ans_id2.empty())
        {
            cout << "ID " << ans_id2 << endl;
        }
        if(!ans_rbr.empty())
        {
            cout << "RBR " << ans_rbr <<endl;
        }
        if(!ans_semicolon.empty())
        {
            cout << "SEMICOLON " << ans_semicolon <<endl;
        }
    }
    else
    {
        cout << "invalid input" << endl;
        return 0;
    }

    return 0;
}
