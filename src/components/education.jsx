import Building from "../Images/building.png";
import "../styles/Education.css";
const education = () => {
    return (
        <>
        <section className="education" id="education">
        <h1 className="heading">EDUCATION</h1>
    <div className="container-fluid">
        <div className="row" style={{display:"flex"}}>
            <div className="col-3">
                <div className="card">
                    <div className="building mt-2"><img src={Building}
                            class="building-img"/>
                        <div className="qualification">MCA</div>
                        <div className="year">2023-2025</div><br/>
                        <div className="edu-name">Karpagam Academy Of Higher Education, Coimbatore</div>
                        <div className="Grade">CGPA: 8.81</div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="card">
                    <div className="building mt-2"><img src={Building}
                            className="building-img"/>
                        <div className="qualification">B.Sc Computer Science</div>
                        <div className="year">2019-2022</div><br/>
                        <div className="edu-name">Kongu Arts and Science College,<br/>Erode</div>
                        <div className="Grade">CGPA: 8.30</div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="card">
                    <div className="building mt-2"><img src={Building}
                            className="building-img"/>
                        <div className="qualification">HSC</div>
                        <div className="year">2018-2019</div><br/>
                        <div className="edu-name">Thenmalar Higher Secondary School, Dharapuram</div>
                        <div className="Grade">76.5%</div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="card">
                    <div className="building mt-2"><img src={Building}
                            className="building-img"/>
                        <div className="qualification">SSLC</div>
                        <div className="year">2016-2017</div><br/>
                        <div className="edu-name">Thenmalar Higher Secondary School, Dharapuram</div>
                        <div className="Grade">93.6%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</>
    );
};
export default education;